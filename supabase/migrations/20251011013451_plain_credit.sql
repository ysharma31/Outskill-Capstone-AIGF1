/*
  # Create mills table for testing

  1. New Tables
    - `mills`
      - `id` (uuid, primary key)
      - `mill_name` (text, not null)
      - `email` (text, not null)
      - `keywords` (text, not null)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `mills` table
    - Add policy for public access (for testing purposes)
*/

CREATE TABLE IF NOT EXISTS mills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mill_name text NOT NULL,
  email text NOT NULL,
  keywords text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE mills ENABLE ROW LEVEL SECURITY;

-- Grant base permissions to anonymous users
GRANT SELECT, INSERT ON mills TO anon;

-- For testing purposes, allow public access
CREATE POLICY "Allow public access to mills"
  ON mills
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);