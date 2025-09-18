import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Clock, User, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockRequests = [
  {
    id: "DR-2024-001",
    type: "Medical",
    urgency: "critical",
    location: "123 Main St, Downtown",
    contact: "Sarah Johnson",
    phone: "+1 (555) 123-4567",
    peopleAffected: 3,
    description: "Injured people trapped in collapsed building",
    status: "pending",
    timestamp: "10 minutes ago",
  },
  {
    id: "DR-2024-002", 
    type: "Food",
    urgency: "high",
    location: "Community Center, Oak Avenue",
    contact: "Mike Chen",
    phone: "+1 (555) 234-5678",
    peopleAffected: 25,
    description: "Families need emergency food supplies",
    status: "in-progress",
    timestamp: "25 minutes ago",
  },
  {
    id: "DR-2024-003",
    type: "Shelter",
    urgency: "medium",
    location: "Pine Street Bridge",
    contact: "Emergency Coordinator",
    phone: "+1 (555) 345-6789",
    peopleAffected: 12,
    description: "Temporary shelter needed for displaced families",
    status: "resolved",
    timestamp: "2 hours ago",
  },
  {
    id: "DR-2024-004",
    type: "Rescue",
    urgency: "critical",
    location: "River Road, Mile Marker 15",
    contact: "Local Fire Dept",
    phone: "+1 (555) 456-7890",
    peopleAffected: 8,
    description: "Vehicle accident, people trapped",
    status: "pending",
    timestamp: "5 minutes ago",
  },
];

const RequestsTable = () => {
  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return <Badge variant="destructive">🔴 Critical</Badge>;
      case "high":
        return <Badge className="bg-warning text-warning-foreground">🟠 High</Badge>;
      case "medium":
        return <Badge variant="secondary">🟡 Medium</Badge>;
      case "low":
        return <Badge variant="outline">🟢 Low</Badge>;
      default:
        return <Badge variant="outline">{urgency}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="border-primary text-primary">Pending</Badge>;
      case "in-progress":
        return <Badge className="bg-secondary text-secondary-foreground">In Progress</Badge>;
      case "resolved":
        return <Badge variant="default" className="bg-success text-success-foreground">Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "medical":
        return "🏥";
      case "food":
        return "🍎";
      case "shelter":
        return "🏠";
      case "rescue":
        return "🚁";
      default:
        return "📋";
    }
  };

  const handleResolveRequest = (id: string) => {
    toast({
      title: "✅ Request Resolved",
      description: `Request ${id} has been marked as resolved.`,
    });
  };

  const handleAssignRequest = (id: string) => {
    toast({
      title: "👤 Request Assigned",
      description: `Request ${id} has been assigned to your team.`,
    });
  };

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-primary" />
          <span>Active Requests</span>
        </CardTitle>
        <CardDescription>
          Live dashboard of emergency requests and their status
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Urgency</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>People</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockRequests.map((request) => (
              <TableRow key={request.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(request.type)}</span>
                    <span>{request.type}</span>
                  </div>
                </TableCell>
                <TableCell>{getUrgencyBadge(request.urgency)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1 max-w-xs">
                    <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate text-sm">{request.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{request.contact}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{request.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{request.peopleAffected}</span>
                </TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{request.timestamp}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {request.status === "pending" && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleAssignRequest(request.id)}
                      >
                        Assign
                      </Button>
                    )}
                    {request.status !== "resolved" && (
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => handleResolveRequest(request.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            🔄 Real-time updates • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestsTable;