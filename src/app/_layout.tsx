import '../../global.css';

import { Stack } from 'expo-router';
import { AuthProvider } from '../providers/AuthProviders';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  )
}
