-- DropForeignKey
ALTER TABLE "ProjectServices" DROP CONSTRAINT "ProjectServices_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "headerDescription" TEXT,
ADD COLUMN     "headerTitle" TEXT,
ADD COLUMN     "heroMediaUrl" TEXT,
ADD COLUMN     "imageInHero" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "url" TEXT;

-- AddForeignKey
ALTER TABLE "ProjectServices" ADD CONSTRAINT "ProjectServices_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
