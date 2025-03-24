import { dynamoDB } from "@/src/utils/awsAgent";
import {
  PutCommand,
  QueryCommand,
  DeleteCommand,
  UpdateCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

export async function userProfileSetup(userID, name) {
  const params = {
    TableName: `${process.env.AWS_DB_NAME}users`,
    Key: {
      pKey: `USER#${userID}`,
      sKey: `USER#${userID}`,
    },
    UpdateExpression: "set name = :name",
    ExpressionAttributeValues: {
      ":name": name,
    },
    ConditionExpression: "emailVerified = :emailVerified",
    ExpressionAttributeValues: {
      ":emailVerified": true,
    },
  };

  const command = new UpdateCommand(params);
  try {
    await dynamoDB.send(command);
    return {
      success: true,
      message: "User profile updated successfully",
    };
  } catch (error) {
    throw new Error(error);
  }
}

export async function enrollGoal(userID, goalID) {
  const params = {
    TableName: `${process.env.AWS_DB_NAME}users`,
    Item: {
      pKey: `GOAL_ENROLLMENT#${userID}#${goalID}`,
      sKey: `GOAL_ENROLLMENT@${userID}`,
      goalId: goalID,
      userId: userID,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  };
  const command = new PutCommand(params);
  try {
    await dynamoDB.send(command);
    return {
      success: true,
      message: "Goal enrolled successfully",
    };
  } catch (error) {
    throw new Error(error);
  }
}
