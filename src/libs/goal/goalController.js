import { dynamoDB } from "@/src/utils/awsAgent";
import {
  PutCommand,
  QueryCommand,
  DeleteCommand,
  UpdateCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

export async function getGoalList() {
  const params = {
    TableName: `${process.env.AWS_DB_NAME}master`,
    FilterExpression: "sKey = :sKey",
    ExpressionAttributeValues: {
      ":sKey": "GOALS",
    },
  };
  const command = new ScanCommand(params);
  try {
    const result = await dynamoDB.send(command);
    return {
      success: true,
      message: "Goal list fetched successfully",
      data: result.Items.map((item) => ({
        id: item.pKey.split("#")[1],
        title: item.title,
        icon: item.icon,
      })),
    };
  } catch (error) {
    throw new Error(error);
  }
}
