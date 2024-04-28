export interface IApiResponse {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export interface IUser {
  name: string;
  lastName: string;
  dateOfBirth: string;
  education: string;
  role: string;
}

export interface IGraph {
 data: IGraphData;
 type: string;
}

export interface IGraphData {
  agreeableness: number;
  drive: number;
  luck: number;
  openness: number;
}

export interface IAssessment {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;

}
