App Link for viewing https://docs.google.com/presentation/d/11XJD6w6X4EVyw9opLwuAcp7yUvIe7JmUKUZop9xuXnE/edit?usp=sharing

# create models from db
Scaffold-DbContext "Server=(localdb)\MSSQLLocalDB;Database=ProjectManagementDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -force


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
            

