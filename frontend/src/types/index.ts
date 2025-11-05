// This interface defines the shape of the form data
export interface ISupportRequestForm {
  name: string;
  email: string;
  classroom: string;
  // This 'union' type ensures only valid options are used
  issue_type: 'projector' | 'computer' | 'audio' | 'other';
  description: string;
}