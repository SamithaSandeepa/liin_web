import { fetchRoleCategories, fetchTeamMembers, RoleCategory, TeamMember } from '@/lib/api';
import TeamSectionClient from './TeamSectionClient';

export default async function TeamSection() {
  let categories: RoleCategory[] = [];
  let teamMembers: TeamMember[] = [];

  try {
    const [categoriesRes, membersRes] = await Promise.all([
      fetchRoleCategories(),
      fetchTeamMembers()
    ]);
    console.log(categories, teamMembers, "adfadf")
    categories = categoriesRes.data?.filter(cat => cat.status === 'published') || [];
    teamMembers = membersRes.data?.filter(member => member.status === 'published') || [];
  } catch (error) {
    console.error('Failed to fetch team data:', error);
  }

  return <TeamSectionClient categories={categories} teamMembers={teamMembers} />;
}
