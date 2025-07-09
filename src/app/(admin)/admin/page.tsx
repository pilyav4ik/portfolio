import { createClient } from '../../utils/supabase/server';
import AdminClientComponent from './admin-client-component';

export default async function AdminPage() {
  const supabase = createClient();

  const { data: { user } } = await (await supabase).auth.getUser();

  return <AdminClientComponent user={user} />;
}