@@ .. @@
 ALTER TABLE consignees ENABLE ROW LEVEL SECURITY;
 
+-- Grant base permissions to anonymous users
+GRANT SELECT, INSERT ON consignees TO anon;
+
 -- For testing purposes, allow public access
 CREATE POLICY "Allow public access to consignees"
   ON consignees