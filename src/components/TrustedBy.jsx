import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const PARTNERS = [
  {
    id: 'ssd',
    name: 'SSD Hospital',
    type: 'Sai Snehdeep Hospital',
    logo: '/assets/img/ssd.jpeg',
    accent: '#f87820'
  },
  {
    id: 'gsmc',
    name: 'Government S.M.C. Hospital',
    type: 'Medical College & Hospital',
    logo: '/assets/img/Logo_gsmc_my_creation.png',
    accent: '#ffc53d'
  },
  {
    id: 'lifeline',
    name: 'Lifeline Hospital',
    type: 'Multi-Speciality Centre',
    logo: '/assets/img/lifeline.jpeg',
    accent: '#ed1b24'
  },
  {
    id: 'queens',
    name: 'Queens Hospital',
    type: 'Super Speciality Institute',
    logo: '/assets/img/Quuens%20logo.png',
    accent: '#f87820'
  },
  {
    id: 'samarth-main',
    name: 'Shri Swami Samarth Hospital',
    type: 'NABH Accredited Hospital',
    accent: '#ffc53d'
  },
  {
    id: 'samarth-heart',
    name: 'Shri Swami Samarth Heart Care',
    type: 'Cardiac Sciences Institute',
    accent: '#ed1b24'
  },
  {
    id: 'samarth-care',
    name: 'Shri Swami Samarth Care',
    type: 'Critical & Emergency Care',
    accent: '#f87820'
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Hospital',
    type: 'Advanced Trauma Care',
    logo: '/assets/img/kedarnathlogo.jpg',
    accent: '#ed1b24'
  },
  {
    id: 'sunrise',
    name: 'Sunrise Super Speciality Hospital',
    type: 'Tertiary Care Hospital',
    accent: '#f87820'
  }
];

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y + radius, x + radius, y);
  ctx.closePath();
}

/**
 * Creates ultra-crisp high-resolution 2D CanvasTexture representing a translucent glass card
 * with genuine company logo, subtle specular sheen, delicate borders, and crisp typography.
 */
function createCardTexture(partner) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 480;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  let loadedImg = null;

  const renderCard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Soft Ambient Floating Shadow Under Glass Card (Realistic depth, subtle elevation)
    ctx.save();
    ctx.shadowColor = 'rgba(248, 120, 32, 0.12)';
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = '#ffffff';
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.fill();
    ctx.restore();

    // 2. Translucent Crystalline Liquid-Glass Card Fill (Crisp cool-white)
    const bgGrad = ctx.createLinearGradient(16, 16, 784, 464);
    bgGrad.addColorStop(0, 'rgba(255, 255, 255, 0.99)');
    bgGrad.addColorStop(0.45, 'rgba(252, 254, 255, 0.96)');
    bgGrad.addColorStop(1, 'rgba(246, 250, 255, 0.98)');
    ctx.fillStyle = bgGrad;
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.fill();

    // 3. Subtle Specular Glass Sheen Reflection (kept below the logo area)
    ctx.save();
    const sheenGrad = ctx.createLinearGradient(16, 16, 16, 88);
    sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
    sheenGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = sheenGrad;
    drawRoundedRect(ctx, 16, 16, 768, 72, 28);
    ctx.fill();
    ctx.restore();

    // 4. Delicate Crisp Glass Border (Refined edge highlights)
    const borderGrad = ctx.createLinearGradient(16, 16, 784, 464);
    borderGrad.addColorStop(0, 'rgba(255, 197, 61, 0.75)');
    borderGrad.addColorStop(0.5, 'rgba(248, 120, 32, 0.32)');
    borderGrad.addColorStop(1, 'rgba(237, 27, 36, 0.52)');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.stroke();

    // 5. Logo Rendering Area (Centered, Sharp, True Vibrant Colors, Correctly Proportioned)
    const logoBoxX = 110;
    const logoBoxY = 46;
    const logoBoxW = 580;
    const logoBoxH = 220;

    if (loadedImg && loadedImg.complete && loadedImg.naturalWidth > 0) {
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      const imgW = loadedImg.naturalWidth;
      const imgH = loadedImg.naturalHeight;
      const scale = Math.min(logoBoxW / imgW, logoBoxH / imgH, 1.35);
      const drawW = imgW * scale;
      const drawH = imgH * scale;
      const drawX = logoBoxX + (logoBoxW - drawW) / 2;
      const drawY = logoBoxY + (logoBoxH - drawH) / 2;

      ctx.drawImage(loadedImg, drawX, drawY, drawW, drawH);
      ctx.restore();
    } else {
      // Elegant healthcare vector badge emblem (for partners without image file)
      ctx.save();
      const cx = 400;
      const cy = 152;

      // Outer glowing emblem ring
      ctx.strokeStyle = `${partner.accent}44`;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 54, 0, Math.PI * 2);
      ctx.stroke();

      // Inner soft emblem background
      ctx.fillStyle = `${partner.accent}14`;
      ctx.beginPath();
      ctx.arc(cx, cy, 53, 0, Math.PI * 2);
      ctx.fill();

      // Stylized Medical Cross
      ctx.fillStyle = partner.accent;
      ctx.shadowColor = `${partner.accent}40`;
      ctx.shadowBlur = 12;
      const barW = 16;
      const barH = 56;
      ctx.fillRect(cx - barW / 2, cy - barH / 2, barW, barH);
      ctx.fillRect(cx - barH / 2, cy - barH / 2, barH, barW);
      ctx.restore();
    }

    // 6. Typography: Hospital / Partner Name (Crisp Slate Charcoal)
    ctx.font = '700 32px "Google Sans", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(partner.name, 400, 342);

    // 7. Typography: Subtitle / Hospital Classification
    ctx.font = '500 20px "Google Sans", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(partner.type, 400, 392);
  };

  renderCard();

  if (partner.logo) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = partner.logo;
    const onLoad = () => {
      loadedImg = img;
      renderCard();
      texture.needsUpdate = true;
    };
    img.onload = onLoad;
    img.onerror = () => {
      loadedImg = null;
      renderCard();
      texture.needsUpdate = true;
    };
    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    }
  }

  return texture;
}

export default function TrustedBy() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle' | 'bouncing' | 'loaded'
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check user preference for reduced motion
    let autoRotate = !prefersReducedMotion;

    // Scene Setup: Transparent background blending seamlessly with page
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 440;

    // Camera with realistic depth perspective, centered on carousel
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 8.2 : 7.2);
    camera.lookAt(0, 0, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 3D Cylindrical Ring Setup - Elevated slightly up towards the text
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0.26, 0);
    scene.add(ringGroup);

    // Geometry & Radius tuned: cards sit slightly near to each other with a tight, cohesive gap
    // 12 cards, 30 deg apart. At radius 3.95, chord distance is 2.05 units.
    // Card width is 1.68 units. Gap is ~0.32 units (clean, elegant separation without overlap).
    const radius = 3.95;
    const count = PARTNERS.length;
    const cardGeometry = new THREE.PlaneGeometry(1.95, 1.16);
    const texturesToDispose = [];
    const materialsToDispose = [];
    const meshes = [];

    PARTNERS.forEach((partner, i) => {
      const angle = (i / count) * Math.PI * 2;
      const texture = createCardTexture(partner);
      texturesToDispose.push(texture);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      materialsToDispose.push(material);

      const mesh = new THREE.Mesh(cardGeometry, material);
      mesh.position.x = radius * Math.sin(angle);
      mesh.position.z = radius * Math.cos(angle);
      mesh.position.y = 0;
      mesh.rotation.y = angle;

      ringGroup.add(mesh);
      meshes.push(mesh);
    });

    // Rotation & Drag Physics State
    let rotationY = 0;
    const baseSpeed = 0.0022;
    let dragVelocity = 0;
    let isDragging = false;
    let pointerStartX = 0;
    let previousPointerX = 0;
    let isHovered = false;
    let hoveredMesh = null;
    let hasPointerPosition = false;
    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // Pointer Event Listeners for Interactive Drag/Swipe
    const onPointerDown = (e) => {
      isDragging = true;
      pointerStartX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      previousPointerX = pointerStartX;
      dragVelocity = 0;
      canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const deltaX = currentX - previousPointerX;
      previousPointerX = currentX;

      const sensitivity = isMobile ? 0.0055 : 0.004;
      rotationY += deltaX * sensitivity;
      dragVelocity = deltaX * sensitivity;
    };

    const onCanvasPointerMove = (e) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
      hasPointerPosition = true;
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      hasPointerPosition = false;
      hoveredMesh = null;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('mousemove', onCanvasPointerMove);

    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Animation Loop with Visibility & Intersection Observation
    let animId;
    let isVisibleOnScreen = true;
    let isBouncing = prefersReducedMotion;
    let bounceStartTime = prefersReducedMotion ? performance.now() - 1600 : 0;

    window.__triggerTrustedBounce = () => {
      isBouncing = true;
      bounceStartTime = performance.now();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleOnScreen = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const worldPos = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisibleOnScreen) return;

      // Handle spring bouncing entrance for round 3D cylindrical carousel
      if (!isBouncing) {
        ringGroup.scale.set(0.0001, 0.0001, 0.0001);
      } else {
        const elapsed = (performance.now() - bounceStartTime) / 1000;
        if (elapsed < 1.6) {
          // Damped harmonic spring: shoots to ~1.12, settles at 1.0
          const scaleVal = Math.max(0, 1 - Math.exp(-4.2 * elapsed) * Math.cos(9.6 * elapsed));
          ringGroup.scale.set(scaleVal, scaleVal, scaleVal);

          // Height spring bounce elevated slightly up towards text
          const yOffset = 0.26 - Math.exp(-4.2 * elapsed) * Math.sin(8.0 * elapsed) * 0.3;
          ringGroup.position.y = yOffset;
          ringGroup.position.x = 0;

          // Initial rotational impulse on arrival
          const speedKick = Math.exp(-3.2 * elapsed) * 0.02;
          rotationY += speedKick;
        } else {
          ringGroup.scale.set(1, 1, 1);
          ringGroup.position.y = 0.26;
          ringGroup.position.x = 0;
        }
      }

      // Handle continuous rotation or drag momentum
      if (!isDragging) {
        if (Math.abs(dragVelocity) > 0.0001) {
          rotationY += dragVelocity;
          dragVelocity *= 0.94; // Smooth inertial decay
        } else if (autoRotate) {
          // Slow continuous rotation, decelerates smoothly on hover
          const currentSpeed = isHovered ? baseSpeed * 0.35 : baseSpeed;
          rotationY += currentSpeed;
        }
      }

      ringGroup.rotation.y = rotationY;

      if (isHovered && hasPointerPosition && !isDragging) {
        raycaster.setFromCamera(pointer, camera);
        hoveredMesh = raycaster.intersectObjects(meshes, false)[0]?.object || null;
      } else {
        hoveredMesh = null;
      }

      const time = performance.now() * 0.001;
      meshes.forEach((mesh, idx) => {
        // Subtle weightless organic floating wave
        mesh.position.y = Math.sin(time * 1.4 + idx * 0.52) * 0.04;

        // Center Card Prominence (gentle 1.08x scaling at front center)
        mesh.getWorldPosition(worldPos);
        const frontness = Math.max(0, worldPos.z / radius);
        const centerProminence = Math.pow(frontness, 3.0);
        const hoverTarget = !prefersReducedMotion && mesh === hoveredMesh ? 0.035 : 0;
        mesh.userData.hoverScale = THREE.MathUtils.lerp(mesh.userData.hoverScale || 0, hoverTarget, 0.18);
        const cardScale = 1.0 + 0.08 * centerProminence + mesh.userData.hoverScale;
        mesh.scale.set(cardScale, cardScale, 1);

        if (mesh === hoveredMesh) {
          mesh.material.color.setRGB(1, 0.94, 0.86);
        } else {
          mesh.material.color.setRGB(1, 1, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 440;
      const newIsMobile = newWidth < 768;

      ringGroup.position.set(0, 0.26, 0);

      camera.aspect = newWidth / newHeight;
      camera.position.z = newIsMobile ? 8.2 : 7.2;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on Component Unmount
    return () => {
      delete window.__triggerTrustedBounce;
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('mousemove', onCanvasPointerMove);

      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);

      cardGeometry.dispose();
      texturesToDispose.forEach((t) => t.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  // Section Scroll-Trigger for Animated Entrance
  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (prefersReducedMotion) {
            setAnimationPhase('loaded');
          } else {
            setAnimationPhase('bouncing');
            if (window.__triggerTrustedBounce) {
              window.__triggerTrustedBounce();
            }

            setTimeout(() => {
              setAnimationPhase('loaded');
            }, 1500);
          }

          scrollObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    scrollObserver.observe(sectionRef.current);
    return () => scrollObserver.disconnect();
  }, []);

  return (
    <section 
      id="trusted-by" 
      ref={sectionRef}
      className={`trusted-by-cinematic-section ${animationPhase !== 'idle' ? 'section-active' : ''}`}
      aria-label="Trusted By Partner Hospitals"
    >
      <div className="trusted-container-miniscreen">

        {/* =========================================================
            CLEAN TOP HEADING: EXACT SAME SIZE AS HOSPITAL MODULES TEXT
            ========================================================= */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Trusted <span className="text-gradient-gemini">By</span>
          </h2>
        </div>

        {/* =========================================================
            3D ROUND ROTATING BOXES (CENTERED DIRECTLY BELOW TOP HEADING)
            ========================================================= */}
        <div className="trusted-carousel-stage-wrapper">
          <div 
            ref={containerRef} 
            className={`trusted-3d-stage ${animationPhase === 'bouncing' || animationPhase === 'loaded' ? 'boxes-bouncing' : ''}`}
          >
            <canvas 
              ref={canvasRef} 
              className="trusted-three-canvas" 
              aria-label="Interactive 3D cylindrical carousel of company logos"
            />
          </div>
        </div>

        <ul className="visually-hidden">
          {PARTNERS.map((partner) => (
            <li key={partner.id}>
              {partner.name} - {partner.type}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
