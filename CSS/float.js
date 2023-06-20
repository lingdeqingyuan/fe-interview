/**
 * 清除浮动
 * 为了解决子元素浮动导致的父元素高度坍塌的问题。
 * 解决方案：
 * 1. 添加新元素 clear:both;
 * 2. 父元素使用伪元素
 * 3. 触发父元素BFC
 * 
 * 触发BFC的方法：
 * 1. overflow: hidden scroll auto
 * 2. position: absolute fixed
 * 3. float: left;
 * 4. display: inline-block flex tabel-cell
 * 
 */