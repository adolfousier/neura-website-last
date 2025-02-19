type Application = {
    name: string
    description: string
    status: string
    url: string
  }
  
  type PreviewData = {
    visible: boolean
    url: string
    name: string
    position: {
      x: number
      y: number
    }
  }