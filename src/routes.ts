import CreateCoursesService from "./CreateCoursesService";
import { Request, Response } from "express";

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute({
    name: "Informática",
    educator: "Dillon",
    duration: 10,
  });

  return response.json();
}
