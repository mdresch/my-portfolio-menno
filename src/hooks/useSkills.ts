import { useState, useEffect } from "react";
import { SkillService } from "@/lib/api-services";
import { Skill } from "@/types/api";

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadSkills() {
      try {
        setIsLoading(true);
        const [skillsData, categoriesData] = await Promise.all([
          SkillService.getAll(),
          SkillService.getCategories()
        ]);
        setSkills(skillsData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load skills"));
      } finally {
        setIsLoading(false);
      }
    }

    loadSkills();
  }, []);

  return { skills, categories, isLoading, error };
}

export function useSkillsByCategory(category: string | null) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) {
      setIsLoading(false);
      return;
    }

    async function loadSkillsByCategory() {
      try {
        setIsLoading(true);
        const data = await SkillService.getByCategory(category);
        setSkills(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Failed to load skills for category ${category}`));
      } finally {
        setIsLoading(false);
      }
    }

    loadSkillsByCategory();
  }, [category]);

  return { skills, isLoading, error };
}
