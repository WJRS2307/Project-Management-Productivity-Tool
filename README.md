**Presentation for viewing of features:** https://docs.google.com/presentation/d/11XJD6w6X4EVyw9opLwuAcp7yUvIe7JmUKUZop9xuXnE/edit?usp=sharing
**Progress and Features Report with Figma Link:** https://docs.google.com/document/d/1ePvLr4E81PPxPDaP1LJZb9mToYArnzIl/edit
**Orginal Github link:**:https://github.com/jz1300/project-management_productivity-tool

Some Screenshots:
<img width="875" height="690" alt="image" src="https://github.com/user-attachments/assets/1149994e-e376-4693-bf18-1e5015e0d126" />
<img width="872" height="414" alt="image" src="https://github.com/user-attachments/assets/5c9a7fcf-ef29-4b2a-b80f-315b282f01a3" />
<img width="872" height="414" alt="image" src="https://github.com/user-attachments/assets/dd9e5bed-7b5b-4d90-936d-941ca845426a" />

# steps
If you dont have mdf, dbcontext files do these steps 
sqllocaldb stop
sqllocaldb delete
Add-Migration MyMigration -context IdentityContext
Add-Migration projectmanagement -context ProjectmanagementDbContext
update-database -Context IdentityContext
update-database -Context ProjectmanagementDbContext
Scaffold-DbContext "Server=(localdb)\MSSQLLocalDB;Database=ProjectManagementDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -force

# steps
Usually you do these steps:
update-database -Context ProjectManagementDBContext -migration projectMigration
you should get mdf file in C:\Users\<user>. make a connection via server explorer


#adding tables
manually add in 20221121113221_projectMigration.cs file the tables and relationships
update-database -Context ProjectManagementDBContext -migration projectMigration

update the dbContext with : IdentityDbContext<ApplicationUser> delete classes and onModelCreating related to identity.

Add this after that in onModelCreating: 
base.OnModelCreating(modelBuilder);
            modelBuilder.Ignore<IdentityUserLogin<string>>();
            modelBuilder.Ignore<IdentityUser<string>>();
            modelBuilder.Ignore<AspNetUserLogin>();
            modelBuilder.Ignore<AspNetUserToken>();
            modelBuilder.Ignore<AspNetUserToken>();
            

