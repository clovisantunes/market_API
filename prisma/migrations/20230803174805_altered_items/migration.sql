-- AlterTable
ALTER TABLE "users" ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "usersClient" ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false;
