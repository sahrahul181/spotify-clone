"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/types_db";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderprops {
  children: React.ReactNode;
}

const SupabaseProvder: React.FC<SupabaseProviderprops> = ({ children }) => {
  const [supabaseClient] = useState(() => {
    return createClientComponentClient<Database>();
  });
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvder;
