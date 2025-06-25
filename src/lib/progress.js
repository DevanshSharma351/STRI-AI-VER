// src/lib/Progress.jsx
import { supabase } from "./supabase"

export async function fetchProgress(email) {
  const { data, error } = await supabase
    .from("Progress")
    .select("completed")
    .eq("email", email)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error("Fetch Progress Error:", error.message)
  }

  return data?.completed || []
}

export async function updateProgress(email, completed) {
  const { error } = await supabase
    .from("Progress")
    .upsert([{ email, completed }], { onConflict: ["email"] })

  if (error) {
    console.error("Update Progress Error:", error.message)
  }
}