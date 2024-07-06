import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  propertyType?: "Option1" | null;
  status?: "Option1" | null;
};
