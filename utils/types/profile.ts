export interface Profile {
  name: string;
  email: string;
  role: string;
  avatar: string | null;
  location: string;
  phone: string;
  joinDate: string;
  status: string;
}

export interface ProfileState {
  profiles: Record<string, Profile>;
  currentProfile: Profile | null;
  loading: boolean;
  error: string | null;
}
