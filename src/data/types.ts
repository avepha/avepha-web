export type WorkingExperience = {
  id: number,
  topic: string,
  icon: string
  details: [WorkingExperienceDetail]
}

export type WorkingExperienceDetail = {
  id: number,
  year: string,
  position: string,
  company: string,
  mdFile: string,
}
