export const ComponentCacheSym = Symbol.for("@effect/html/io/ComponentCache")
export type ComponentCacheSym = typeof ComponentCacheSym

/**
 * @tsplus type ets/ComponentCache
 */
export interface ComponentCache {
  readonly [ComponentCacheSym]: ComponentCacheSym
  get<K extends Node>(k: K): Effect.UIO<Maybe<Component>>
  getOrElse<K extends Node, A>(k: K, f: LazyArg<A>): Effect.UIO<Component | A>
  getOrElseEffect<K extends Node, R, E, A>(k: K, fa: Effect<R, E, A>): Effect<R, E, Component | A>
  set<K extends Node>(k: K, v: Component): Effect.UIO<Component>
  setEffect<K extends Node, R, E>(
    k: K,
    v: LazyArg<Effect<R, E, Component>>
  ): Effect<R, E, Component>
}

/**
 * @tsplus type ets/ComponentCache/Ops
 */
export interface ComponentCacheOps {
  $: ComponentCacheAspects
  Tag: Tag<ComponentCache>
}
export const ComponentCache: ComponentCacheOps = {
  $: {},
  Tag: Service.Tag()
}

/**
 * @tsplus type ets/ComponentCache/Aspects
 */
export interface ComponentCacheAspects {}
