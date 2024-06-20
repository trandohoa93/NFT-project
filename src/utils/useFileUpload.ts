import { ref } from 'vue'

window.URL = window.URL || window.webkitURL

function useImageFilePreview(file: File): string {
  return window.URL.createObjectURL(file)
}

function useQueuePreview(fileArr: File[]): Record<number, string> {
  const previewMap: Record<number, string> = {}

  let idx = 0
  for (const file of fileArr) {
    const fileData = useImageFilePreview(file)
    previewMap[idx] = fileData
    idx++
  }

  return previewMap
}

export function useFileUpdate() {
  const previewMap = ref<Record<number, string>>({})

  const initData = () => {
    previewMap.value = {}
  }

  const setFile = async (file: File[] = []) => {
    initData()
    previewMap.value = useQueuePreview(file)
  }

  return { setFile, previewMap }
}
