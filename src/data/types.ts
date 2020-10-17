export type WorkingExperience = {
  topic: string,
  icon: string
  details: [WorkingExperienceDetail]
}

export type WorkingExperienceDetail = {
  year: string,
  position: string,
  company: string,
  mdFile: string,
}

export type TProject = {
  id: number,
  title: string,
  featuredImage: string,
  mdFile: string,
  createDay: string,
  createMonth: string,
  createYear: string
}
