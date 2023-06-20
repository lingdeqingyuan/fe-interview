/**
 * React架构
 * 老架构（V16之前）
 * Reconciler(协调器)、Renderer(渲染器)
 * 新架构（V16之后）
 * Scheduler(调度器)、Reconciler(协调器)、Renderer(渲染器)
 * 
 * Scheduler
 * 针对更新任务进行优先级排列 将高优先级更新任务交给协调器
 * Reconciler
 * 协调器接收到任务之后会使用diff算法来获取哪些地方需要更新并交给渲染器
 * Renderer
 * 渲染器将需要更新的地方作用到视图中
 */