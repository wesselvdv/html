import { concreteTemplate } from "@effect/html/data/Template/operations/_internal/InternalTemplate"

/**
 * @tsplus getter ets/Template toDocumentFragment
 */
export function toDocumentFragment(
  self: Template
): DocumentFragment {
  concreteTemplate(self)
  // clone deeply the fragment
  return document.importNode(self.content, true)
}
