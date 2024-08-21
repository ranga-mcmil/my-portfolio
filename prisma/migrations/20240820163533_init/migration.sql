-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "long_description" TEXT NOT NULL,
    "repository" TEXT,
    "url" TEXT,
    "type" TEXT,
    "path" TEXT,
    "slug" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "technologies" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BioText" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "BioText_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
