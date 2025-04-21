/*
  # Create page views counter table

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `count` (bigint, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `page_views` table
    - Add policy for authenticated users to read data
    - Add policy for service role to update data
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count bigint DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insert initial counter
INSERT INTO page_views (count) VALUES (0)
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public read access"
ON page_views
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow service role to update"
ON page_views
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);