(ns ^:figwheel-hooks psilib.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

;; BOILERPLATE
(defn multiply [a b] (* a b))

(defonce inst-state (reagent/atom {:status 0
                                   :osc "sine"
                                   :detune 100
                                   :gain 0.042
                                   :maxGain 0.15
                                   :minGain 0
                                   :freq 3000
                                   :minFreq 2000
                                   :maxFreq 6000
                                   :play 1     }))

(defn get-app-element []
  (gdom/getElement "app"))

(defn sound-play-status [args]
  (swap! inst-state assoc-in [:play] args))

;; THEREMIN
;; Instrument State

(defn hello-world []
  [:div
   [:h1 "A Theremin"]
   [:h3 "Use your Gamepad"]
   [:input {:type "button"
            :value "Start"
            :onClick #(sound-play-status 1)}]
   [:input {:type "button"
            :value "Stop"
            :onClick #(sound-play-status 0)}]
   [:p (:play @inst-state)]
   ])

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; Define Audio Context, Oscillator & Gain Node
(defonce context (js/window.AudioContext.))
(defonce osc (.createOscillator context))
(defonce amp (.createGain context))

;; Initialise Oscillator & Gain
(set! (.-type osc) (:osc @inst-state))
(set! (.-value (.-detune osc)) (:detune @inst-state))
(set! (.-value (.-gain amp)) (:gain @inst-state))

;; Start oscillator
(if (= 1 (:play @inst-state))
      (. osc start))
(if (= 0 (:play @inst-state))
       (. osc stop))
;; Create Wiring
(. osc connect amp)
(. amp connect (.-destination context))

;; mouse event capture function ....uncomment once done with button
;; (defn capture-mouse [ev]
;;   (println (.-clientX ev))
;;   (println (.-clientY ev)))

;; HOOKS
;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; add mousemove event listener on document...uncomment once done with button
;; (set! (.-onmousemove js/document) capture-mouse) 

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (println @inst-state)
  ;; (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

;; uncomment to stop sound if needed
;; (. osc stop)
;; refresh to restart .. will come up with a better method later


