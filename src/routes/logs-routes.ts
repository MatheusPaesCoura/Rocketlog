import { Router } from "express";
import {DeliveryLogsController} from '@/controllers/delivery-logs-controller'
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const logsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()

logsRoutes.post(
    "/",
    ensureAuthenticated,
    verifyUserAuthorization(["sale"]),
    deliveryLogsController.create)

logsRoutes.get(
    "/:delivery_id/show",
    ensureAuthenticated,
    verifyUserAuthorization(["sale", "customer"]),
    deliveryLogsController.index
)

export {logsRoutes}

