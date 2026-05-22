import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, TerminalSquare, Wrench } from 'lucide-react';

export default function AdminSourceCode() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Source Code</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Quick access to the project repository and deployment notes.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <TerminalSquare className="h-5 w-5 text-primary" />
              <CardTitle>Project Status</CardTitle>
            </div>
            <CardDescription>
              This page is a lightweight placeholder so the admin route loads cleanly in production.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Vite + React</Badge>
              <Badge variant="secondary">Supabase Connected</Badge>
              <Badge variant="secondary">Cloudflare Pages Ready</Badge>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
              Use the GitHub page for repository monitoring, and deploy this app to Cloudflare Pages with
              `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` configured as environment variables.
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href="https://github.com/ayanahmedsootwala-droid/Vertex-last"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Open Repository
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/admin/github">
                  <Wrench className="mr-2 h-4 w-4" />
                  Open GitHub Admin
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
