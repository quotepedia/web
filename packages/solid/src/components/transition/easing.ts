/**
 * Common easing curves.
 * 
 * Preview: https://easings.co/
 */

export const easeIn = {
  easeInSine: "cubic-bezier(0.47,0,0.75,0.72)" as const,
  easeInQuad: "cubic-bezier(0.55,0.08,0.68,0.53)" as const,
  easeInCubic: "cubic-bezier(0.55,0.06,0.68,0.19)" as const,
  easeInQuart: "cubic-bezier(0.9,0.03,0.69,0.22)" as const,
  easeInQuint: "cubic-bezier(0.76,0.05,0.86,0.06)" as const,
  easeInExpo: "cubic-bezier(0.95,0.05,0.8,0.04)" as const,
  easeInCirc: "cubic-bezier(0.6,0.04,0.98,0.34)" as const,
  easeInBack: "cubic-bezier(0.6,-0.28,0.74,0.05)" as const,
};

export const easeOut = {
  easeOutSine: "cubic-bezier(0.39,0.57,0.56,1)" as const,
  easeOutQuad: "cubic-bezier(0.25,0.46,0.45,0.94)" as const,
  easeOutCubic: "cubic-bezier(0.22,0.61,0.36,1)" as const,
  easeOutQuart: "cubic-bezier(0.17,0.84,0.44,1)" as const,
  easeOutQuint: "cubic-bezier(0.23,1,0.32,1)" as const,
  easeOutExpo: "cubic-bezier(0.19,1,0.22,1)" as const,
  easeOutCirc: "cubic-bezier(0.08,0.82,0.17,1)" as const,
  easeOutBack: "cubic-bezier(0.18,0.89,0.32,1.27)" as const,
};

export const easeInOut = {
  easeInOut: "cubic-bezier(0.4,0,0.2,1)" as const,
  easeInOutSine: "cubic-bezier(0.45,0.05,0.55,0.95)" as const,
  easeInOutQuad: "cubic-bezier(0.46,0.03,0.52,0.96)" as const,
  easeInOutCubic: "cubic-bezier(0.65,0.05,0.36,1)" as const,
  easeInOutQuart: "cubic-bezier(0.77,0,0.18,1)" as const,
  easeInOutCirc: "cubic-bezier(0.79,0.14,0.15,0.86)" as const,
  easeInOutQuint: "cubic-bezier(0.86,0,0.07,1)" as const,
  easeInOutExpo: "cubic-bezier(1,0,0,1)" as const,
  easeInOutBack: "cubic-bezier(0.68,-0.55,0.27,1.55)" as const,
};

export const easing = {
  ...easeIn,
  ...easeOut,
  ...easeInOut,
};

export default easing;
