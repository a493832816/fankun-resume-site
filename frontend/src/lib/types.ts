export interface Project {
  id: string;
  title: string;
  style: string;
  aspect_ratio: string;
  created_at: string;
  updated_at: string;
  storyboards?: Storyboard[];
  pages?: Page[];
}

export interface Storyboard {
  id: string;
  project_id: string;
  panel_index: number;
  scene_description: string;
  dialogue: string;
  speaker: string;
  character_action: string;
  camera_type: string;
  emotion: string;
  image_url: string;
  status: string;
}

export interface Page {
  id: string;
  project_id: string;
  page_index: number;
  layout_type: string;
  output_url: string;
}
