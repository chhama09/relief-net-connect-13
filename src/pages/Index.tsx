import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Map, BarChart3 } from "lucide-react";
import SosButton from "@/components/SosButton";
import IncidentReportForm from "@/components/IncidentReportForm";
import RequestsTable from "@/components/RequestsTable";
import DisasterMap from "@/components/DisasterMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-emergency rounded-lg">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Disaster Relief Network</h1>
              <p className="text-muted-foreground">Emergency Response & Coordination Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Emergency SOS Section */}
        <section className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-br from-background to-muted border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                <AlertTriangle className="h-6 w-6" />
                <span>Emergency Response</span>
              </CardTitle>
              <CardDescription>
                Immediate assistance available 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SosButton />
            </CardContent>
          </Card>
        </section>

        {/* Main Dashboard Tabs */}
        <section>
          <Tabs defaultValue="report" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-96 mx-auto">
              <TabsTrigger value="report" className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Report</span>
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center space-x-2">
                <Map className="h-4 w-4" />
                <span>Map</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="report" className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">Report an Incident</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Help us coordinate relief efforts by reporting emergency needs in your area. 
                    Your information helps responders prioritize and allocate resources effectively.
                  </p>
                </div>
                <IncidentReportForm />
              </TabsContent>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">Response Dashboard</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Live overview of all emergency requests, their status, and response coordination.
                  </p>
                </div>
                <RequestsTable />
              </TabsContent>

              <TabsContent value="map" className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">Incident Map</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Visual representation of emergency requests across the affected area with real-time updates.
                  </p>
                </div>
                <DisasterMap />
              </TabsContent>
            </div>
          </Tabs>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            🚨 Emergency Hotline: <strong>911</strong> • 
            📱 Crisis Text Line: <strong>Text HOME to 741741</strong>
          </p>
          <p className="text-xs text-muted-foreground">
            Disaster Relief Network - Connecting communities in crisis
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
