/*
  # Create consignees table for testing

  1. New Tables
    - `consignees`
      - `id` (uuid, primary key)
      - `consignee_name` (text, not null)
      - `consignee_address` (text, not null)
      - `gstin` (text, not null)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consignees` table
    - Add policy for public access (for testing purposes)
*/

CREATE TABLE IF NOT EXISTS consignees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  consignee_name text NOT NULL,
  consignee_address text NOT NULL,
  gstin text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consignees ENABLE ROW LEVEL SECURITY;

-- For testing purposes, allow public access
CREATE POLICY "Allow public access to consignees"
  ON consignees
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);