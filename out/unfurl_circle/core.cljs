(ns unfurl-circle.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0
   :t-norm 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)
   :t-norm (mod (+ (:t-norm state) 0.01) 1)})

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill 255)
  (q/stroke 255)
  ; Calculate x and y coordinates of the circle.
  (let [center-x (/ (q/width) 2)
        center-y (/ (q/height) 2)
        diameter 100
        radius (/ diameter 2)
        circumference (* q/PI diameter)
        left-endpoint-x (- center-x (/ circumference 2))
        line-y (+ center-y radius)
        n-dots 360]
    #_(q/ellipse center-x center-y diameter diameter)
    #_(q/line left-endpoint-x line-y
            (+ left-endpoint-x circumference) line-y)

    (q/no-fill)
    (doseq [i (range (inc n-dots))]
      (let [angle (* (/ i n-dots) q/TWO-PI)
            x1    (+ left-endpoint-x (* circumference (/ i n-dots)))
            y1    line-y
            x2    (- center-x (* radius (q/sin angle)))
            y2    (- center-y (* radius (q/cos angle)))
            xc    (/ (+ (- (q/sq x2) (q/sq x1))
                        (q/sq (- y2 y1)))
                     (* 2 (- x2 x1)))
            rc    (q/abs (- x1 xc))
            dc    (* 2 rc)

            theta-0 (q/atan2 (- y2 y1) (- x2 xc))
            d-theta (if (> i (/ n-dots 2))
                      (- 0 theta-0)
                      (+ q/PI theta-0))
            t-norm  (:t-norm state)
            t-theta (if (> i (/ n-dots 2))
                      (+ theta-0 (* t-norm d-theta))
                      (- theta-0 (* t-norm d-theta)))
            xt      (+ xc (* rc (q/cos t-theta)))
            yt      (+ y1 (* rc (q/sin t-theta)))]
        (q/stroke 255)
        #_(q/ellipse xc y1 dc dc)
        (q/stroke 0)
        #_(q/point x1 y1)
        #_(q/point x2 y2)
        (q/point xt yt)))))

(q/defsketch unfurl-circle
  :host "unfurl-circle"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
