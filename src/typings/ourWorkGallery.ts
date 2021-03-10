export interface OurWorkGalleryDetail {
  id: number
  title: string
  description: string
  url?: string
  small?: string
  medium?: string
  large?: string
}

export type OurWorkGallery = OurWorkGalleryDetail[]
