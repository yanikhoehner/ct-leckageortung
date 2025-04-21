/*
  # Create increment function for page views

  1. New Function
    - `increment_page_views()`: Increments the page view counter atomically
*/

CREATE OR REPLACE FUNCTION increment_page_views()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE page_views
  SET count = count + 1,
      updated_at = now()
  WHERE id = (SELECT id FROM page_views LIMIT 1);
END;
$$;