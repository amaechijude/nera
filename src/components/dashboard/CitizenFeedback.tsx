import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const feedbacks = [
  {
    name: "Moses Blessing",
    location: "Nnewi North",
    avatar: "/donate.jpg"
  },
  {
    name: "Moses Blessing", 
    location: "Nnewi North",
    avatar: "/donate.jpg"
  },
  {
    name: "Moses Blessing",
    location: "Nnewi North", 
    avatar: "/donate.jpg"
  }
];

export function CitizenFeedback() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6">
        <CardTitle className="text-base md:text-lg font-semibold">Citizen Feedback</CardTitle>
        <Button variant="outline" size="sm" className="text-xs">
          View all <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 p-4 md:p-6">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={feedback.avatar} />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{feedback.name}</p>
                <p className="text-xs text-muted-foreground">{feedback.location}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              View
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}