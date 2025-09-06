"use client";
import React from "react";

/**
 * 临时占位渲染器：避免 next-contentlayer2/hooks 依赖导致构建失败。
 * 以后如果要用 Contentlayer 渲染 MDX code，可再换回正式实现。
 */
export default function MdxRenderer(_props: { code?: string }) {
  return <div />;
}
