// utils/iconResolver.ts
import * as icons from "lucide-vue-next";

/**
 * Resolve an icon by name from lucide-vue-next library.
 * @param iconName - The name of the icon to resolve.
 * @returns The resolved icon component or a default icon.
 */
export function resolveIcon(iconName: string) {
    return icons[iconName] || icons["HelpCircle"]; // 默认图标为 HelpCircle
}
