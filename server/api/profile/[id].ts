// Define profile type
type Profile = {
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  location: string;
  phone: string;
  joinDate: string;
  status: string;
}

// Define profiles record type
type Profiles = Record<string, Profile>

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Missing ID parameter' })

  // Simulasi database
  const profiles: Profiles = {
    '1': {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'CEO',
      avatar: null,
      location: 'New York, USA',
      phone: '+1 (555) 000-0001',
      joinDate: '2024-01-01',
      status: 'active'
    },
    '2': {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'CTO',
      avatar: null,
      location: 'San Francisco, USA',
      phone: '+1 (555) 000-0002',
      joinDate: '2024-01-15',
      status: 'active'
    },
    '3': {
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'Developer',
      avatar: null,
      location: 'London, UK',
      phone: '+1 (555) 000-0003',
      joinDate: '2024-02-01',
      status: 'inactive'
    }
  }

  if (!(id in profiles)) {
    throw createError({
      statusCode: 404,
      message: `Profile with ID ${id} not found`
    })
  }

  return profiles[id]
}) 