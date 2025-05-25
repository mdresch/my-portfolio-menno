-- Script to create performance-optimized indexes for the portfolio application

-- Index for blog post lookups by slug (for URL routing)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_BlogPosts_Slug' AND object_id = OBJECT_ID('dbo.BlogPosts'))
BEGIN
    CREATE UNIQUE NONCLUSTERED INDEX [IX_BlogPosts_Slug] ON [dbo].[BlogPosts] ([Slug])
    WITH (ONLINE = ON);  -- Use ONLINE = ON for minimal disruption in production
    PRINT 'Created index IX_BlogPosts_Slug';
END

-- Index for cross-posts by platform (for filtering)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_CrossPosts_Platform' AND object_id = OBJECT_ID('dbo.CrossPosts'))
BEGIN
    CREATE NONCLUSTERED INDEX [IX_CrossPosts_Platform] ON [dbo].[CrossPosts] ([Platform], [PublishedAt])
    INCLUDE ([URL], [BlogPostId]);  -- Include columns needed for covering queries
    PRINT 'Created index IX_CrossPosts_Platform';
END

-- Index for skills by category and proficiency
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Skills_Category_Proficiency' AND object_id = OBJECT_ID('dbo.Skills'))
BEGIN
    CREATE NONCLUSTERED INDEX [IX_Skills_Category_Proficiency] ON [dbo].[Skills] ([Category], [ProficiencyLevel] DESC)
    INCLUDE ([Name], [Description]);
    PRINT 'Created index IX_Skills_Category_Proficiency';
END

-- Add filtered index for unread contact messages
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_ContactMessages_IsRead' AND object_id = OBJECT_ID('dbo.ContactMessages'))
BEGIN
    CREATE NONCLUSTERED INDEX [IX_ContactMessages_IsRead] ON [dbo].[ContactMessages] ([IsRead])
    WHERE [IsRead] = 0;  -- Filtered index for unread messages only
    PRINT 'Created filtered index IX_ContactMessages_IsRead';
END