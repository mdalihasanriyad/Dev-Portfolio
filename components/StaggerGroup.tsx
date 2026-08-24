"use client";

import { useEffect, useRef, useState } from "react";
import { Children, cloneElement, isValidElement } from "react";

export default function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child;
    const existingClassName =
      (child.props as { className?: string }).className || "";
    return cloneElement(child as React.ReactElement<any>, {
      className: `stagger-item ${visible ? "is-visible" : ""} ${existingClassName}`,
      style: {
        ...(child.props as any).style,
        animationDelay: `${i * 90}ms`,
      },
    });
  });

  return (
    <div ref={ref} className={className}>
      {items}
    </div>
  );
}
