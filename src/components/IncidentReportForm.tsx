import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Clock, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const IncidentReportForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    urgency: "",
    location: "",
    contactName: "",
    contactPhone: "",
    description: "",
    peopleAffected: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "✅ Report Submitted",
      description: "Your incident report has been received and assigned ID #DR-2024-001",
    });
    
    // Reset form
    setFormData({
      type: "",
      urgency: "",
      location: "",
      contactName: "",
      contactPhone: "",
      description: "",
      peopleAffected: "",
    });
  };

  const getButtonVariant = (type: string) => {
    switch (type) {
      case "medical": return "medical";
      case "food": return "warning";
      case "shelter": return "secondary";
      case "rescue": return "emergency";
      default: return "outline";
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-primary" />
          <span>Report Incident</span>
        </CardTitle>
        <CardDescription>
          Submit details about emergency needs in your area
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Incident Type Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "medical", label: "Medical", icon: "🏥" },
              { value: "food", label: "Food", icon: "🍎" },
              { value: "shelter", label: "Shelter", icon: "🏠" },
              { value: "rescue", label: "Rescue", icon: "🚁" }
            ].map((type) => (
              <Button
                key={type.value}
                type="button"
                variant={formData.type === type.value ? getButtonVariant(type.value) : "outline"}
                className="h-16 flex-col space-y-1"
                onClick={() => setFormData(prev => ({...prev, type: type.value}))}
              >
                <span className="text-xl">{type.icon}</span>
                <span className="text-sm">{type.label}</span>
              </Button>
            ))}
          </div>

          {/* Urgency Level */}
          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({...prev, urgency: value}))}>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="critical">🔴 Critical - Life threatening</SelectItem>
                <SelectItem value="high">🟠 High - Urgent attention needed</SelectItem>
                <SelectItem value="medium">🟡 Medium - Important but not urgent</SelectItem>
                <SelectItem value="low">🟢 Low - Can wait for resources</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </Label>
            <Input
              id="location"
              placeholder="Street address, landmarks, or coordinates"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
              required
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Contact Name</span>
              </Label>
              <Input
                id="contactName"
                placeholder="Your name"
                value={formData.contactName}
                onChange={(e) => setFormData(prev => ({...prev, contactName: e.target.value}))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.contactPhone}
                onChange={(e) => setFormData(prev => ({...prev, contactPhone: e.target.value}))}
                required
              />
            </div>
          </div>

          {/* People Affected */}
          <div className="space-y-2">
            <Label htmlFor="peopleAffected">Number of People Affected</Label>
            <Input
              id="peopleAffected"
              type="number"
              placeholder="e.g., 5"
              value={formData.peopleAffected}
              onChange={(e) => setFormData(prev => ({...prev, peopleAffected: e.target.value}))}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about the situation, resources needed, and any other relevant information..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={!formData.type || !formData.location || !formData.description}
          >
            <Clock className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IncidentReportForm;