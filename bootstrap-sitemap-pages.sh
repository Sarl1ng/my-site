#!/usr/bin/env bash
set -euo pipefail

# Запускать из корня проекта (там где package.json)
[ -f package.json ] || { echo "Запусти из корня проекта (нет package.json)"; exit 1; }

PAGES=(
  "o-nas"
  "czeny"
  "politika-konfidenczialnosti"

  "ustanovka-santehniki"
  "prochistka-kanalizaczii"
  "ustranenie-zasorov"

  "gidrodinamicheskaya-ochistka-kanalizaczii"
  "mehanicheskaya-prochistka-kanalizaczii"
  "prochistka-livnevoj-kanalizaczii"
  "elektromehanicheskaya-prochistka-kanalizaczii"
  "prochistka-unitaza"

  "ustanovka-rakoviny"
  "ustanovka-smesitelya"
  "ustanovka-vanny"
  "ustanovka-unitaza"
  "ustanovka-dushevoj-kabiny"
  "ustanovka-schetchikov-vody"
  "ustanovka-vodonagrevatelya"

  "zamena-trub"
  "zamena-kanalizaczionnyh-trub"
  "zamena-vodyanyh-trub-hvs-gvs"
  "zamena-stoyakov"
  "zamena-radiatorov"
  "zamena-trub-otopleniya"
)

TEMPLATE="$(cat <<'ASTRO'
---
import BaseLayout from "@/layouts/BaseLayout.astro";
const title = "Страница";
---
<BaseLayout title={title}>
  <main class="site-container py-10">
    <h1 class="text-3xl font-extrabold">{title}</h1>
    <p class="mt-3 text-slate-700">Заглушка. Заполним контентом.</p>
  </main>
</BaseLayout>
ASTRO
)"

for slug in "${PAGES[@]}"; do
  dir="src/pages/${slug}"
  mkdir -p "$dir"
  f="$dir/index.astro"
  if [ ! -f "$f" ]; then
    printf "%s\n" "$TEMPLATE" > "$f"
  fi
done

echo "OK: pages scaffolded from sitemap list (sample-page excluded)."
