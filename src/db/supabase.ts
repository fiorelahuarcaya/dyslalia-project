export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      CHILD: {
        Row: {
          birthdate: string | null
          id_child: number
          id_parent: number | null
          id_specialist: number | null
          lastname: string
          name: string
        }
        Insert: {
          birthdate?: string | null
          id_child?: number
          id_parent?: number | null
          id_specialist?: number | null
          lastname: string
          name: string
        }
        Update: {
          birthdate?: string | null
          id_child?: number
          id_parent?: number | null
          id_specialist?: number | null
          lastname?: string
          name?: string
        }
      }
      EVALUATION: {
        Row: {
          created_at: string
          evaluated_at: string | null
          id_child: number
          id_evaluation: number
          id_practice: number
          observation: string | null
        }
        Insert: {
          created_at?: string
          evaluated_at?: string | null
          id_child: number
          id_evaluation?: number
          id_practice: number
          observation?: string | null
        }
        Update: {
          created_at?: string
          evaluated_at?: string | null
          id_child?: number
          id_evaluation?: number
          id_practice?: number
          observation?: string | null
        }
      }
      EVALUATION_DETAIL: {
        Row: {
          id_detail: number
          id_evaluation: number
          id_exercise: number | null
          score: number | null
          transcription: string | null
        }
        Insert: {
          id_detail?: number
          id_evaluation: number
          id_exercise?: number | null
          score?: number | null
          transcription?: string | null
        }
        Update: {
          id_detail?: number
          id_evaluation?: number
          id_exercise?: number | null
          score?: number | null
          transcription?: string | null
        }
      }
      EXERCISE: {
        Row: {
          id_exercise: number
          id_practice: number
          order: number
          text_repeat: string
        }
        Insert: {
          id_exercise?: number
          id_practice: number
          order?: number
          text_repeat: string
        }
        Update: {
          id_exercise?: number
          id_practice?: number
          order?: number
          text_repeat?: string
        }
      }
      PARENT: {
        Row: {
          dashboard_key: string | null
          id_parent: number
          id_user: string
          lastname: string
          name: string
        }
        Insert: {
          dashboard_key?: string | null
          id_parent?: number
          id_user: string
          lastname: string
          name: string
        }
        Update: {
          dashboard_key?: string | null
          id_parent?: number
          id_user?: string
          lastname?: string
          name?: string
        }
      }
      PRACTICE: {
        Row: {
          created_at: string
          description_practice: string
          free: boolean | null
          help: string | null
          id_author: number | null
          id_practice: number
          title_practice: string
        }
        Insert: {
          created_at?: string
          description_practice: string
          free?: boolean | null
          help?: string | null
          id_author?: number | null
          id_practice?: number
          title_practice: string
        }
        Update: {
          created_at?: string
          description_practice?: string
          free?: boolean | null
          help?: string | null
          id_author?: number | null
          id_practice?: number
          title_practice?: string
        }
      }
      SPECIALIST: {
        Row: {
          adress: string | null
          id_specialist: number
          id_user: string
          lastname: string
          name: string
        }
        Insert: {
          adress?: string | null
          id_specialist?: number
          id_user: string
          lastname: string
          name: string
        }
        Update: {
          adress?: string | null
          id_specialist?: number
          id_user?: string
          lastname?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
