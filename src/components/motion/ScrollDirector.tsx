"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  cameraState,
  logoState,
  resetCinematicState,
  sceneState,
  snakeState,
} from "@/three/animations/cinematicState";

export default function ScrollDirector() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    resetCinematicState();

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        /*
         * GSAP puede entregar conditions como undefined.
         * Convertimos cada condición explícitamente a booleano
         * para evitar errores de TypeScript.
         */
        const conditions = context.conditions ?? {};

        const desktop = Boolean(conditions.desktop);
        const reduceMotion = Boolean(conditions.reduceMotion);

        const panels =
          gsap.utils.toArray<HTMLElement>(".story-panel");

        const copyBlocks =
          gsap.utils.toArray<HTMLElement>("[data-copy]");

        /*
         * Accesibilidad:
         * si el usuario prefiere movimiento reducido,
         * mostramos el contenido sin animaciones complejas.
         */
        if (reduceMotion) {
          gsap.set(copyBlocks, {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            clearProps: "transform",
          });

          gsap.set(".scroll-progress-bar", {
            scaleX: 1,
          });

          return;
        }

        /*
         * Estado inicial de todos los bloques de texto.
         */
        gsap.set(copyBlocks, {
          autoAlpha: 0,
          y: 72,
          filter: "blur(12px)",
          willChange: "transform, opacity, filter",
        });

        /*
         * La primera sección debe aparecer visible desde el inicio.
         */
        if (copyBlocks[0]) {
          gsap.set(copyBlocks[0], {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
          });
        }

        /*
         * Entrada y salida cinematográfica de cada sección.
         */
        panels.forEach((panel, index) => {
          const copy =
            panel.querySelector<HTMLElement>("[data-copy]");

          if (!copy) {
            return;
          }

          /*
           * Entrada de las secciones 2 y 3.
           */
          if (index > 0) {
            gsap.to(copy, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 82%",
                end: "center 58%",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
          }

          /*
           * Salida de las secciones 1 y 2.
           */
          if (index < panels.length - 1) {
            gsap.to(copy, {
              autoAlpha: 0,
              y: -60,
              filter: "blur(10px)",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "58% 42%",
                end: "bottom 18%",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
          }
        });

        /*
         * Barra superior de avance de la experiencia.
         */
        gsap.fromTo(
          ".scroll-progress-bar",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#experience",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );

        /*
         * Configuración inicial para teléfonos.
         */
        if (!desktop) {
          Object.assign(cameraState, {
            x: 0,
            y: 0.4,
            z: 9.2,
            lookX: 0,
            lookY: 0.35,
            lookZ: 0,
            fov: 50,
          });

          Object.assign(sceneState, {
            x: 0,
            y: 1.05,
            z: 0,
            scale: 0.72,
          });
        }

        /*
         * Timeline principal de las tres secciones.
         */
        const timeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: "#experience",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });

        if (desktop) {
          /*
           * SECCIÓN 1 — IMPACTO
           * La escena permanece a la derecha del titular.
           */
          timeline
            .to(
              cameraState,
              {
                x: 0.65,
                y: 0.08,
                z: 6.6,
                lookX: 1.15,
                lookY: 0,
                lookZ: 0,
                fov: 43,
                duration: 1,
              },
              0,
            )
            .to(
              sceneState,
              {
                x: 1.8,
                y: 0,
                z: 0,
                rotationX: 0,
                rotationY: 0.55,
                rotationZ: 0.1,
                scale: 1.08,
                ringSpread: 1.12,
                coreGlow: 0.5,
                energyOpacity: 0.12,
                duration: 1,
              },
              0,
            )

            /*
             * SECCIÓN 2 — SISTEMA
             * El universo cruza hacia el lado izquierdo.
             */
            .to(
              cameraState,
              {
                x: -2.5,
                y: 0.65,
                z: 5.15,
                lookX: -0.45,
                lookY: 0.1,
                lookZ: 0,
                fov: 46,
                duration: 1,
              },
              1,
            )
            .to(
              sceneState,
              {
                x: -1.55,
                y: -0.05,
                z: 0,
                rotationX: 0.18,
                rotationY: 1.55,
                rotationZ: -0.2,
                scale: 1.3,
                ringSpread: 1.52,
                coreGlow: 0.72,
                energyOpacity: 0.18,
                duration: 1,
              },
              1,
            )
            .to(
              logoState,
              {
                reveal: 0.65,
                rotationY: 0.4,
                depth: 0.35,
                scale: 1,
                duration: 1,
              },
              1,
            )
            .to(
              snakeState,
              {
                reveal: 0.35,
                explode: 0.15,
                coil: 0.25,
                headRotation: 0,
                glow: 0.35,
                duration: 1,
              },
              1,
            )

            /*
             * SECCIÓN 3 — RESULTADOS Y CONVERSIÓN
             * La cámara se aleja y las capas se expanden.
             */
            .to(
              cameraState,
              {
                x: 0,
                y: 0.5,
                z: 8.8,
                lookX: 0,
                lookY: 0.15,
                lookZ: 0,
                fov: 48,
                duration: 1,
              },
              2,
            )
            .to(
              sceneState,
              {
                x: 0,
                y: -0.05,
                z: 0,
                rotationX: -0.08,
                rotationY: 2.55,
                rotationZ: 0.15,
                scale: 0.88,
                ringSpread: 2.15,
                coreGlow: 1,
                energyOpacity: 0.28,
                duration: 1,
              },
              2,
            )
            .to(
              logoState,
              {
                reveal: 1,
                rotationY: 1,
                depth: 1,
                scale: 1.08,
                duration: 1,
              },
              2,
            )
            .to(
              snakeState,
              {
                reveal: 1,
                explode: 1,
                coil: 0.8,
                headRotation: 0.65,
                glow: 1,
                duration: 1,
              },
              2,
            );
        } else {
          /*
           * Trayectoria simplificada para móviles.
           */
          timeline
            .to(
              cameraState,
              {
                x: 0,
                y: 0.5,
                z: 8,
                lookX: 0,
                lookY: 0.25,
                lookZ: 0,
                fov: 49,
                duration: 1,
              },
              0,
            )
            .to(
              sceneState,
              {
                x: 0,
                y: 0.8,
                z: 0,
                scale: 0.78,
                rotationY: 0.65,
                ringSpread: 1.1,
                coreGlow: 0.48,
                energyOpacity: 0.11,
                duration: 1,
              },
              0,
            )
            .to(
              cameraState,
              {
                x: -0.65,
                y: 0.25,
                z: 7.1,
                lookX: -0.2,
                lookY: 0.2,
                fov: 50,
                duration: 1,
              },
              1,
            )
            .to(
              sceneState,
              {
                x: 0.25,
                y: 0.65,
                scale: 0.9,
                rotationY: 1.6,
                ringSpread: 1.48,
                coreGlow: 0.75,
                energyOpacity: 0.18,
                duration: 1,
              },
              1,
            )
            .to(
              cameraState,
              {
                x: 0,
                y: 0.35,
                z: 9.5,
                lookX: 0,
                lookY: 0.2,
                fov: 52,
                duration: 1,
              },
              2,
            )
            .to(
              sceneState,
              {
                x: 0,
                y: 0.75,
                scale: 0.68,
                rotationY: 2.5,
                ringSpread: 1.95,
                coreGlow: 1,
                energyOpacity: 0.25,
                duration: 1,
              },
              2,
            )
            .to(
              logoState,
              {
                reveal: 1,
                rotationY: 0.75,
                depth: 0.7,
                scale: 0.92,
                duration: 2,
              },
              1,
            )
            .to(
              snakeState,
              {
                reveal: 1,
                explode: 0.65,
                coil: 0.55,
                headRotation: 0.35,
                glow: 1,
                duration: 2,
              },
              1,
            );
        }

        return () => {
          timeline.kill();
        };
      },
    );

    /*
     * Esperamos un frame para que el navegador calcule
     * correctamente la altura de las tres secciones.
     */
    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      media.revert();
      resetCinematicState();
    };
  }, []);

  return null;
}