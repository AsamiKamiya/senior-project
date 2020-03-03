//  This file was automatically generated and should not be edited.

import AWSAppSync

public struct CreateTamomonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID? = nil, name: String, hunger: Int? = nil, modified: String? = nil) {
    graphQLMap = ["id": id, "name": name, "hunger": hunger, "modified": modified]
  }

  public var id: GraphQLID? {
    get {
      return graphQLMap["id"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: String {
    get {
      return graphQLMap["name"] as! String
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var hunger: Int? {
    get {
      return graphQLMap["hunger"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "hunger")
    }
  }

  public var modified: String? {
    get {
      return graphQLMap["modified"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }
}

public struct ModeltamomonConditionInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(name: ModelStringInput? = nil, hunger: ModelIntInput? = nil, modified: ModelStringInput? = nil, and: [ModeltamomonConditionInput?]? = nil, or: [ModeltamomonConditionInput?]? = nil, not: ModeltamomonConditionInput? = nil) {
    graphQLMap = ["name": name, "hunger": hunger, "modified": modified, "and": and, "or": or, "not": not]
  }

  public var name: ModelStringInput? {
    get {
      return graphQLMap["name"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var hunger: ModelIntInput? {
    get {
      return graphQLMap["hunger"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "hunger")
    }
  }

  public var modified: ModelStringInput? {
    get {
      return graphQLMap["modified"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }

  public var and: [ModeltamomonConditionInput?]? {
    get {
      return graphQLMap["and"] as! [ModeltamomonConditionInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "and")
    }
  }

  public var or: [ModeltamomonConditionInput?]? {
    get {
      return graphQLMap["or"] as! [ModeltamomonConditionInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "or")
    }
  }

  public var not: ModeltamomonConditionInput? {
    get {
      return graphQLMap["not"] as! ModeltamomonConditionInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "not")
    }
  }
}

public struct ModelStringInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: String? = nil, eq: String? = nil, le: String? = nil, lt: String? = nil, ge: String? = nil, gt: String? = nil, contains: String? = nil, notContains: String? = nil, between: [String?]? = nil, beginsWith: String? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil, size: ModelSizeInput? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "contains": contains, "notContains": notContains, "between": between, "beginsWith": beginsWith, "attributeExists": attributeExists, "attributeType": attributeType, "size": size]
  }

  public var ne: String? {
    get {
      return graphQLMap["ne"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: String? {
    get {
      return graphQLMap["eq"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: String? {
    get {
      return graphQLMap["le"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: String? {
    get {
      return graphQLMap["lt"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: String? {
    get {
      return graphQLMap["ge"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: String? {
    get {
      return graphQLMap["gt"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var contains: String? {
    get {
      return graphQLMap["contains"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "contains")
    }
  }

  public var notContains: String? {
    get {
      return graphQLMap["notContains"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "notContains")
    }
  }

  public var between: [String?]? {
    get {
      return graphQLMap["between"] as! [String?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var beginsWith: String? {
    get {
      return graphQLMap["beginsWith"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "beginsWith")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }

  public var size: ModelSizeInput? {
    get {
      return graphQLMap["size"] as! ModelSizeInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "size")
    }
  }
}

public enum ModelAttributeTypes: RawRepresentable, Equatable, JSONDecodable, JSONEncodable {
  public typealias RawValue = String
  case binary
  case binarySet
  case bool
  case list
  case map
  case number
  case numberSet
  case string
  case stringSet
  case null
  /// Auto generated constant for unknown enum values
  case unknown(RawValue)

  public init?(rawValue: RawValue) {
    switch rawValue {
      case "binary": self = .binary
      case "binarySet": self = .binarySet
      case "bool": self = .bool
      case "list": self = .list
      case "map": self = .map
      case "number": self = .number
      case "numberSet": self = .numberSet
      case "string": self = .string
      case "stringSet": self = .stringSet
      case "_null": self = .null
      default: self = .unknown(rawValue)
    }
  }

  public var rawValue: RawValue {
    switch self {
      case .binary: return "binary"
      case .binarySet: return "binarySet"
      case .bool: return "bool"
      case .list: return "list"
      case .map: return "map"
      case .number: return "number"
      case .numberSet: return "numberSet"
      case .string: return "string"
      case .stringSet: return "stringSet"
      case .null: return "_null"
      case .unknown(let value): return value
    }
  }

  public static func == (lhs: ModelAttributeTypes, rhs: ModelAttributeTypes) -> Bool {
    switch (lhs, rhs) {
      case (.binary, .binary): return true
      case (.binarySet, .binarySet): return true
      case (.bool, .bool): return true
      case (.list, .list): return true
      case (.map, .map): return true
      case (.number, .number): return true
      case (.numberSet, .numberSet): return true
      case (.string, .string): return true
      case (.stringSet, .stringSet): return true
      case (.null, .null): return true
      case (.unknown(let lhsValue), .unknown(let rhsValue)): return lhsValue == rhsValue
      default: return false
    }
  }
}

public struct ModelSizeInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: Int? = nil, eq: Int? = nil, le: Int? = nil, lt: Int? = nil, ge: Int? = nil, gt: Int? = nil, between: [Int?]? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "between": between]
  }

  public var ne: Int? {
    get {
      return graphQLMap["ne"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: Int? {
    get {
      return graphQLMap["eq"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: Int? {
    get {
      return graphQLMap["le"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: Int? {
    get {
      return graphQLMap["lt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: Int? {
    get {
      return graphQLMap["ge"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: Int? {
    get {
      return graphQLMap["gt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var between: [Int?]? {
    get {
      return graphQLMap["between"] as! [Int?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }
}

public struct ModelIntInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: Int? = nil, eq: Int? = nil, le: Int? = nil, lt: Int? = nil, ge: Int? = nil, gt: Int? = nil, between: [Int?]? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "between": between, "attributeExists": attributeExists, "attributeType": attributeType]
  }

  public var ne: Int? {
    get {
      return graphQLMap["ne"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: Int? {
    get {
      return graphQLMap["eq"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: Int? {
    get {
      return graphQLMap["le"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: Int? {
    get {
      return graphQLMap["lt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: Int? {
    get {
      return graphQLMap["ge"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: Int? {
    get {
      return graphQLMap["gt"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var between: [Int?]? {
    get {
      return graphQLMap["between"] as! [Int?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }
}

public struct UpdateTamomonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID, name: String? = nil, hunger: Int? = nil, modified: String? = nil) {
    graphQLMap = ["id": id, "name": name, "hunger": hunger, "modified": modified]
  }

  public var id: GraphQLID {
    get {
      return graphQLMap["id"] as! GraphQLID
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: String? {
    get {
      return graphQLMap["name"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var hunger: Int? {
    get {
      return graphQLMap["hunger"] as! Int?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "hunger")
    }
  }

  public var modified: String? {
    get {
      return graphQLMap["modified"] as! String?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }
}

public struct DeleteTamomonInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: GraphQLID? = nil) {
    graphQLMap = ["id": id]
  }

  public var id: GraphQLID? {
    get {
      return graphQLMap["id"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }
}

public struct ModeltamomonFilterInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(id: ModelIDInput? = nil, name: ModelStringInput? = nil, hunger: ModelIntInput? = nil, modified: ModelStringInput? = nil, and: [ModeltamomonFilterInput?]? = nil, or: [ModeltamomonFilterInput?]? = nil, not: ModeltamomonFilterInput? = nil) {
    graphQLMap = ["id": id, "name": name, "hunger": hunger, "modified": modified, "and": and, "or": or, "not": not]
  }

  public var id: ModelIDInput? {
    get {
      return graphQLMap["id"] as! ModelIDInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "id")
    }
  }

  public var name: ModelStringInput? {
    get {
      return graphQLMap["name"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "name")
    }
  }

  public var hunger: ModelIntInput? {
    get {
      return graphQLMap["hunger"] as! ModelIntInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "hunger")
    }
  }

  public var modified: ModelStringInput? {
    get {
      return graphQLMap["modified"] as! ModelStringInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "modified")
    }
  }

  public var and: [ModeltamomonFilterInput?]? {
    get {
      return graphQLMap["and"] as! [ModeltamomonFilterInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "and")
    }
  }

  public var or: [ModeltamomonFilterInput?]? {
    get {
      return graphQLMap["or"] as! [ModeltamomonFilterInput?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "or")
    }
  }

  public var not: ModeltamomonFilterInput? {
    get {
      return graphQLMap["not"] as! ModeltamomonFilterInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "not")
    }
  }
}

public struct ModelIDInput: GraphQLMapConvertible {
  public var graphQLMap: GraphQLMap

  public init(ne: GraphQLID? = nil, eq: GraphQLID? = nil, le: GraphQLID? = nil, lt: GraphQLID? = nil, ge: GraphQLID? = nil, gt: GraphQLID? = nil, contains: GraphQLID? = nil, notContains: GraphQLID? = nil, between: [GraphQLID?]? = nil, beginsWith: GraphQLID? = nil, attributeExists: Bool? = nil, attributeType: ModelAttributeTypes? = nil, size: ModelSizeInput? = nil) {
    graphQLMap = ["ne": ne, "eq": eq, "le": le, "lt": lt, "ge": ge, "gt": gt, "contains": contains, "notContains": notContains, "between": between, "beginsWith": beginsWith, "attributeExists": attributeExists, "attributeType": attributeType, "size": size]
  }

  public var ne: GraphQLID? {
    get {
      return graphQLMap["ne"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ne")
    }
  }

  public var eq: GraphQLID? {
    get {
      return graphQLMap["eq"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "eq")
    }
  }

  public var le: GraphQLID? {
    get {
      return graphQLMap["le"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "le")
    }
  }

  public var lt: GraphQLID? {
    get {
      return graphQLMap["lt"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "lt")
    }
  }

  public var ge: GraphQLID? {
    get {
      return graphQLMap["ge"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "ge")
    }
  }

  public var gt: GraphQLID? {
    get {
      return graphQLMap["gt"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "gt")
    }
  }

  public var contains: GraphQLID? {
    get {
      return graphQLMap["contains"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "contains")
    }
  }

  public var notContains: GraphQLID? {
    get {
      return graphQLMap["notContains"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "notContains")
    }
  }

  public var between: [GraphQLID?]? {
    get {
      return graphQLMap["between"] as! [GraphQLID?]?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "between")
    }
  }

  public var beginsWith: GraphQLID? {
    get {
      return graphQLMap["beginsWith"] as! GraphQLID?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "beginsWith")
    }
  }

  public var attributeExists: Bool? {
    get {
      return graphQLMap["attributeExists"] as! Bool?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeExists")
    }
  }

  public var attributeType: ModelAttributeTypes? {
    get {
      return graphQLMap["attributeType"] as! ModelAttributeTypes?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "attributeType")
    }
  }

  public var size: ModelSizeInput? {
    get {
      return graphQLMap["size"] as! ModelSizeInput?
    }
    set {
      graphQLMap.updateValue(newValue, forKey: "size")
    }
  }
}

public final class CreateTamomonMutation: GraphQLMutation {
  public static let operationString =
    "mutation CreateTamomon($input: CreateTamomonInput!, $condition: ModeltamomonConditionInput) {\n  createTamomon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public var input: CreateTamomonInput
  public var condition: ModeltamomonConditionInput?

  public init(input: CreateTamomonInput, condition: ModeltamomonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("createTamomon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(CreateTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(createTamomon: CreateTamomon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "createTamomon": createTamomon.flatMap { $0.snapshot }])
    }

    public var createTamomon: CreateTamomon? {
      get {
        return (snapshot["createTamomon"] as? Snapshot).flatMap { CreateTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "createTamomon")
      }
    }

    public struct CreateTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class UpdateTamomonMutation: GraphQLMutation {
  public static let operationString =
    "mutation UpdateTamomon($input: UpdateTamomonInput!, $condition: ModeltamomonConditionInput) {\n  updateTamomon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public var input: UpdateTamomonInput
  public var condition: ModeltamomonConditionInput?

  public init(input: UpdateTamomonInput, condition: ModeltamomonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("updateTamomon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(UpdateTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(updateTamomon: UpdateTamomon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "updateTamomon": updateTamomon.flatMap { $0.snapshot }])
    }

    public var updateTamomon: UpdateTamomon? {
      get {
        return (snapshot["updateTamomon"] as? Snapshot).flatMap { UpdateTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "updateTamomon")
      }
    }

    public struct UpdateTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class DeleteTamomonMutation: GraphQLMutation {
  public static let operationString =
    "mutation DeleteTamomon($input: DeleteTamomonInput!, $condition: ModeltamomonConditionInput) {\n  deleteTamomon(input: $input, condition: $condition) {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public var input: DeleteTamomonInput
  public var condition: ModeltamomonConditionInput?

  public init(input: DeleteTamomonInput, condition: ModeltamomonConditionInput? = nil) {
    self.input = input
    self.condition = condition
  }

  public var variables: GraphQLMap? {
    return ["input": input, "condition": condition]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Mutation"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("deleteTamomon", arguments: ["input": GraphQLVariable("input"), "condition": GraphQLVariable("condition")], type: .object(DeleteTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(deleteTamomon: DeleteTamomon? = nil) {
      self.init(snapshot: ["__typename": "Mutation", "deleteTamomon": deleteTamomon.flatMap { $0.snapshot }])
    }

    public var deleteTamomon: DeleteTamomon? {
      get {
        return (snapshot["deleteTamomon"] as? Snapshot).flatMap { DeleteTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "deleteTamomon")
      }
    }

    public struct DeleteTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class GetTamomonQuery: GraphQLQuery {
  public static let operationString =
    "query GetTamomon($id: ID!) {\n  getTamomon(id: $id) {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public var id: GraphQLID

  public init(id: GraphQLID) {
    self.id = id
  }

  public var variables: GraphQLMap? {
    return ["id": id]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Query"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("getTamomon", arguments: ["id": GraphQLVariable("id")], type: .object(GetTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(getTamomon: GetTamomon? = nil) {
      self.init(snapshot: ["__typename": "Query", "getTamomon": getTamomon.flatMap { $0.snapshot }])
    }

    public var getTamomon: GetTamomon? {
      get {
        return (snapshot["getTamomon"] as? Snapshot).flatMap { GetTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "getTamomon")
      }
    }

    public struct GetTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class ListTamomonsQuery: GraphQLQuery {
  public static let operationString =
    "query ListTamomons($filter: ModeltamomonFilterInput, $limit: Int, $nextToken: String) {\n  listTamomons(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    __typename\n    items {\n      __typename\n      id\n      name\n      hunger\n      modified\n    }\n    nextToken\n  }\n}"

  public var filter: ModeltamomonFilterInput?
  public var limit: Int?
  public var nextToken: String?

  public init(filter: ModeltamomonFilterInput? = nil, limit: Int? = nil, nextToken: String? = nil) {
    self.filter = filter
    self.limit = limit
    self.nextToken = nextToken
  }

  public var variables: GraphQLMap? {
    return ["filter": filter, "limit": limit, "nextToken": nextToken]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Query"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("listTamomons", arguments: ["filter": GraphQLVariable("filter"), "limit": GraphQLVariable("limit"), "nextToken": GraphQLVariable("nextToken")], type: .object(ListTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(listTamomons: ListTamomon? = nil) {
      self.init(snapshot: ["__typename": "Query", "listTamomons": listTamomons.flatMap { $0.snapshot }])
    }

    public var listTamomons: ListTamomon? {
      get {
        return (snapshot["listTamomons"] as? Snapshot).flatMap { ListTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "listTamomons")
      }
    }

    public struct ListTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["ModeltamomonConnection"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("items", type: .list(.object(Item.selections))),
        GraphQLField("nextToken", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(items: [Item?]? = nil, nextToken: String? = nil) {
        self.init(snapshot: ["__typename": "ModeltamomonConnection", "items": items.flatMap { $0.map { $0.flatMap { $0.snapshot } } }, "nextToken": nextToken])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var items: [Item?]? {
        get {
          return (snapshot["items"] as? [Snapshot?]).flatMap { $0.map { $0.flatMap { Item(snapshot: $0) } } }
        }
        set {
          snapshot.updateValue(newValue.flatMap { $0.map { $0.flatMap { $0.snapshot } } }, forKey: "items")
        }
      }

      public var nextToken: String? {
        get {
          return snapshot["nextToken"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "nextToken")
        }
      }

      public struct Item: GraphQLSelectionSet {
        public static let possibleTypes = ["tamomon"]

        public static let selections: [GraphQLSelection] = [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("name", type: .nonNull(.scalar(String.self))),
          GraphQLField("hunger", type: .scalar(Int.self)),
          GraphQLField("modified", type: .scalar(String.self)),
        ]

        public var snapshot: Snapshot

        public init(snapshot: Snapshot) {
          self.snapshot = snapshot
        }

        public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
          self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
        }

        public var __typename: String {
          get {
            return snapshot["__typename"]! as! String
          }
          set {
            snapshot.updateValue(newValue, forKey: "__typename")
          }
        }

        public var id: GraphQLID {
          get {
            return snapshot["id"]! as! GraphQLID
          }
          set {
            snapshot.updateValue(newValue, forKey: "id")
          }
        }

        public var name: String {
          get {
            return snapshot["name"]! as! String
          }
          set {
            snapshot.updateValue(newValue, forKey: "name")
          }
        }

        public var hunger: Int? {
          get {
            return snapshot["hunger"] as? Int
          }
          set {
            snapshot.updateValue(newValue, forKey: "hunger")
          }
        }

        public var modified: String? {
          get {
            return snapshot["modified"] as? String
          }
          set {
            snapshot.updateValue(newValue, forKey: "modified")
          }
        }
      }
    }
  }
}

public final class OnCreateTamomonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnCreateTamomon {\n  onCreateTamomon {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onCreateTamomon", type: .object(OnCreateTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onCreateTamomon: OnCreateTamomon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onCreateTamomon": onCreateTamomon.flatMap { $0.snapshot }])
    }

    public var onCreateTamomon: OnCreateTamomon? {
      get {
        return (snapshot["onCreateTamomon"] as? Snapshot).flatMap { OnCreateTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onCreateTamomon")
      }
    }

    public struct OnCreateTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class OnUpdateTamomonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnUpdateTamomon {\n  onUpdateTamomon {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onUpdateTamomon", type: .object(OnUpdateTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onUpdateTamomon: OnUpdateTamomon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onUpdateTamomon": onUpdateTamomon.flatMap { $0.snapshot }])
    }

    public var onUpdateTamomon: OnUpdateTamomon? {
      get {
        return (snapshot["onUpdateTamomon"] as? Snapshot).flatMap { OnUpdateTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onUpdateTamomon")
      }
    }

    public struct OnUpdateTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}

public final class OnDeleteTamomonSubscription: GraphQLSubscription {
  public static let operationString =
    "subscription OnDeleteTamomon {\n  onDeleteTamomon {\n    __typename\n    id\n    name\n    hunger\n    modified\n  }\n}"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes = ["Subscription"]

    public static let selections: [GraphQLSelection] = [
      GraphQLField("onDeleteTamomon", type: .object(OnDeleteTamomon.selections)),
    ]

    public var snapshot: Snapshot

    public init(snapshot: Snapshot) {
      self.snapshot = snapshot
    }

    public init(onDeleteTamomon: OnDeleteTamomon? = nil) {
      self.init(snapshot: ["__typename": "Subscription", "onDeleteTamomon": onDeleteTamomon.flatMap { $0.snapshot }])
    }

    public var onDeleteTamomon: OnDeleteTamomon? {
      get {
        return (snapshot["onDeleteTamomon"] as? Snapshot).flatMap { OnDeleteTamomon(snapshot: $0) }
      }
      set {
        snapshot.updateValue(newValue?.snapshot, forKey: "onDeleteTamomon")
      }
    }

    public struct OnDeleteTamomon: GraphQLSelectionSet {
      public static let possibleTypes = ["tamomon"]

      public static let selections: [GraphQLSelection] = [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
        GraphQLField("name", type: .nonNull(.scalar(String.self))),
        GraphQLField("hunger", type: .scalar(Int.self)),
        GraphQLField("modified", type: .scalar(String.self)),
      ]

      public var snapshot: Snapshot

      public init(snapshot: Snapshot) {
        self.snapshot = snapshot
      }

      public init(id: GraphQLID, name: String, hunger: Int? = nil, modified: String? = nil) {
        self.init(snapshot: ["__typename": "tamomon", "id": id, "name": name, "hunger": hunger, "modified": modified])
      }

      public var __typename: String {
        get {
          return snapshot["__typename"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "__typename")
        }
      }

      public var id: GraphQLID {
        get {
          return snapshot["id"]! as! GraphQLID
        }
        set {
          snapshot.updateValue(newValue, forKey: "id")
        }
      }

      public var name: String {
        get {
          return snapshot["name"]! as! String
        }
        set {
          snapshot.updateValue(newValue, forKey: "name")
        }
      }

      public var hunger: Int? {
        get {
          return snapshot["hunger"] as? Int
        }
        set {
          snapshot.updateValue(newValue, forKey: "hunger")
        }
      }

      public var modified: String? {
        get {
          return snapshot["modified"] as? String
        }
        set {
          snapshot.updateValue(newValue, forKey: "modified")
        }
      }
    }
  }
}